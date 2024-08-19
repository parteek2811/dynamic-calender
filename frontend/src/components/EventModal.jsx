import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const eventSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  start: z.string().min(1, 'Start date is required'),
  end: z.string().optional(),
  allDay: z.boolean().optional(),
});

export default function EventModal({ isOpen, onClose, onSubmit, event }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: event || {},
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded">
        <h2 className="text-xl font-bold mb-4">{event ? 'Edit Event' : 'Create Event'}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <label>Title</label>
            <input {...register('title')} className="w-full p-2 border rounded" />
            {errors.title && <p className="text-red-500">{errors.title.message}</p>}
          </div>
          <div className="mb-2">
            <label>Description</label>
            <input {...register('description')} className="w-full p-2 border rounded" />
          </div>
          <div className="mb-2">
            <label>Start Date</label>
            <input {...register('start')} type="date" className="w-full p-2 border rounded" />
            {errors.start && <p className="text-red-500">{errors.start.message}</p>}
          </div>
          <div className="mb-2">
            <label>End Date</label>
            <input {...register('end')} type="date" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-2">
            <label>
              <input type="checkbox" {...register('allDay')} />
              All Day Event
            </label>
          </div>
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="bg-gray-300 p-2 rounded">Cancel</button>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
