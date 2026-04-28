import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import pb from '../lib/pocketbaseClient';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(1, 'Vardas yra privalomas'),
  lastName: z.string().min(1, 'Pavardė yra privaloma'),
  phone: z.string().min(1, 'Telefono numeris yra privalomas'),
  attending: z.string().optional(),
  specialRequests: z.string().optional()
});

function RSVPForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      attending: '',
      specialRequests: ''
    }
  });

  const attendingValue = watch('attending');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await pb.collection('rsvp_responses').create(data, { $autoCancel: false });
      toast.success('Ačiū! Jūsų atsakymas priimtas.');
      reset();
    } catch (error) {
      console.error('RSVP submission error:', error);
      toast.error('Klaida siunčiant atsakymą. Prašome bandyti dar kartą.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-sm font-medium">
            Vardas *
          </Label>
          <Input
            id="firstName"
            {...register('firstName')}
            className="bg-background text-foreground"
            placeholder="Įveskite vardą"
          />
          {errors.firstName && (
            <p className="text-sm text-destructive">{errors.firstName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-sm font-medium">
            Pavardė *
          </Label>
          <Input
            id="lastName"
            {...register('lastName')}
            className="bg-background text-foreground"
            placeholder="Įveskite pavardę"
          />
          {errors.lastName && (
            <p className="text-sm text-destructive">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sm font-medium">
          Telefono numeris *
        </Label>
        <Input
          id="phone"
          {...register('phone')}
          className="bg-background text-foreground"
          placeholder="+370 600 00000"
        />
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="attending" className="text-sm font-medium">
          Ar dalyvausite?
        </Label>
        <Select value={attendingValue} onValueChange={(value) => setValue('attending', value)}>
          <SelectTrigger className="bg-background text-foreground">
            <SelectValue placeholder="Pasirinkite atsakymą" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Taip, dalyvausiu">Taip, dalyvausiu</SelectItem>
            <SelectItem value="Ne, negaliu">Ne, negaliu</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="specialRequests" className="text-sm font-medium">
          Specialūs pageidavimai (neprivaloma)
        </Label>
        <Textarea
          id="specialRequests"
          {...register('specialRequests')}
          className="bg-background text-foreground min-h-[100px]"
          placeholder="Maisto alergijos, dietos apribojimai ar kiti pageidavimai..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Siunčiama...
          </>
        ) : (
          'Patvirtinti dalyvavimą'
        )}
      </Button>
    </form>
  );
}

export default RSVPForm;