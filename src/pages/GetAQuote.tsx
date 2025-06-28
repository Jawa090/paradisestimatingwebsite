import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { User, Mail, Building2, Phone, MapPin, Upload } from 'lucide-react';
import { quantityTakeoffServices } from '@/data/newServices.tsx';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(7, { message: 'Please enter a valid phone number.' }),
  location: z.string().min(2, { message: 'Location must be at least 2 characters.' }),
  serviceType: z.string().min(1, { message: 'Please select a service type.' }),
  message: z.string().optional(),
  file: z.any().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const GetAQuote = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      location: '',
      serviceType: '',
      message: '',
      file: undefined,
    },
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (data: FormValues) => {
    toast({
      title: 'Quote Request Sent!',
      description: 'Thank you for your interest. We will contact you soon.',
      variant: 'default',
    });
    console.log('Quote Request:', data);
    form.reset();
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Brief summary/theory of services (first 3 from quantityTakeoffServices)
  const serviceSummary = quantityTakeoffServices.slice(0, 3).map((service) => (
    <div key={service.id} className="mb-6">
      <div className="flex items-center mb-2">
        <span className="mr-2">{service.icon}</span>
        <span className="font-semibold text-navy text-lg">{service.title}</span>
      </div>
      <p className="text-gray-600 text-sm">{service.shortDescription}</p>
    </div>
  ));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="pt-32 pb-10 bg-gray-50">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">Get a Quote</h1>
          <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg mb-8">
            Fill out the form below to request a personalized quote for your project. Our team will review your information and get back to you promptly.
          </p>
        </div>
      </section>
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4 text-center">Our Services</h2>
            <div className="grid gap-4 md:grid-cols-3">{serviceSummary}</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 shadow-lg animate-fade-in">
            <h2 className="text-xl font-bold text-navy mb-6">Request a Quote</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input className="pl-10" placeholder="John Doe" {...field} />
                        </div>
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
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input className="pl-10" placeholder="john@example.com" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input className="pl-10" placeholder="(555) 123-4567" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input className="pl-10" placeholder="City, State or Address" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {quantityTakeoffServices.map((service) => (
                            <SelectItem key={service.id} value={service.title}>
                              {service.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Choose the service type most relevant to your project
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Details / Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your project, timeline, or any special requirements..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="file"
                  render={({ field: { onChange, ...rest } }) => (
                    <FormItem>
                      <FormLabel>Upload Project Files (optional)</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          ref={fileInputRef}
                          onChange={(e) => onChange(e.target.files?.[0])}
                          {...rest}
                        />
                      </FormControl>
                      <FormDescription>PDF, DOCX, images, or ZIP (max 25MB)</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-gold hover:bg-navy text-white">
                  <Upload className="mr-2 h-5 w-5" />
                  Send Request
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default GetAQuote; 