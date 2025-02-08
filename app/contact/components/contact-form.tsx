'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { contact } from '@julian-at/app/actions/contact';
import { contactSchema } from '@julian-at/app/contact/schema';
import { Button } from '@julian-at/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@julian-at/components/ui/form';
import { Input } from '@julian-at/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@julian-at/components/ui/select';
import { Textarea } from '@julian-at/components/ui/textarea';
import { ArrowRightIcon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type { z } from 'zod';

const typeOptions = [
  {
    value: 'general',
    label: 'General inquiry',
    subtitle: 'I have a question / feedback or just want to say hi.',
  },
  {
    value: 'work',
    label: 'Work (contract or employment)',
    subtitle: 'I want to hire you!',
  },
];

export const ContactForm = () => {
  const searchParams = useSearchParams();
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema as never),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      type:
        (searchParams.get('type') as z.infer<typeof contactSchema>['type']) ??
        'general',
    },
  });

  const onSubmit = async (values: z.infer<typeof contactSchema>) => {
    try {
      const response = await contact(values);

      if ('error' in response) {
        throw new Error(response.error);
      }

      form.reset();
      toast.success(response.message);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'An error occurred');
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Max Mustermann"
                  className="bg-background"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="max@example.com"
                  className="bg-background"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Hi there! I wanted to reach out to you about..."
                  className="bg-background"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => {
            const selectedType = typeOptions.find(
              (option) => option.value === field.value
            );

            return (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-background">
                      <SelectValue asChild>
                        {selectedType ? (
                          <div className="flex items-center gap-1 truncate">
                            <p>{selectedType.label}</p>
                            <p className="truncate text-muted-foreground text-xs">
                              {selectedType.subtitle}
                            </p>
                          </div>
                        ) : (
                          <p>What do you want to talk about?</p>
                        )}
                      </SelectValue>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {typeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        <div className="text-left">
                          <div>{option.label}</div>
                          <div className="text-muted-foreground text-xs">
                            {option.subtitle}
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full"
        >
          Send message
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
};
