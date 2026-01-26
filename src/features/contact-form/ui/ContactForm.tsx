'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';

import { submitContactForm } from '../api/submitContactForm';
import { type ContactFormSchema, createContactFormSchema } from '../model/ContactForm.schema';
import styles from './ContactForm.module.scss';

const TOPIC_OPTIONS = [
  { value: "marketing-consulting", label: "Marketing consulting" },
  { value: "campaign-planning", label: "Campaign planning" },
  { value: "marketing-planning-roadmap", label: "Marketing planning / roadmap" },
  { value: "other", label: "Other" },
];

export const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createContactFormSchema()),
    defaultValues: {
      fullName: '',
      email: '',
      companyProject: '',
      topicOfInquiry: '',
      description: '',
    },
  });

  const onSubmit = async (data: ContactFormSchema) => {
    try {
      setIsLoading(true);
      await submitContactForm(data);
      setTimeout(() => {
        setIsSuccess(true);
        reset();
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };


  return (
    <>
      <div className={styles.contactForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div className={styles.formGroup}>
            <label htmlFor="fullName">
              FULL NAME
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              {...register('fullName')}
              className={errors.fullName ? styles.errorInput : ''}
            />
            {errors.fullName && <p className={styles.error}>{errors.fullName.message}</p>}
          </div>

          {/* Email */}
          <div className={styles.formGroup}>
            <label htmlFor="email">
              EMAIL
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register('email')}
              className={errors.email ? styles.errorInput : ''}
            />
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
          </div>

          {/* Company / Project */}
          <div className={styles.formGroup}>
            <label htmlFor="companyProject">
              COMPANY / PROJECT
            </label>
            <input
              id="companyProject"
              type="text"
              placeholder="Enter your company"
              {...register('companyProject')}
              className={errors.companyProject ? styles.errorInput : ''}
            />
            {errors.companyProject && (
              <p className={styles.error}>{errors.companyProject.message}</p>
            )}
          </div>

          {/* Topic of Inquiry */}
          <div className={styles.formGroup}>
            <label htmlFor="topicOfInquiry">
            Inquiry Type
            </label>
            <Controller
              name="topicOfInquiry"
              control={control}
              render={({ field }) => (
                <Select
                  inputId="topicOfInquiry"
                  options={TOPIC_OPTIONS}
                  placeholder="Choose your topic of inquiry"
                  isSearchable={false}
                  className={`${styles.select} ${errors.topicOfInquiry ? styles.errorSelect : ''}`}
                  classNamePrefix="select"
                  styles={{
                    control: (base, state) => ({
                      ...base,
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderColor: errors.topicOfInquiry
                        ? '#ff2d30'
                        : state.isFocused
                          ? 'rgba(255, 255, 255, 0.2)'
                          : 'transparent',
                      boxShadow: 'none',
                      minHeight: '50px',
                      borderRadius: '25px',
                      '&:hover': {
                        borderColor: errors.topicOfInquiry
                          ? '#ff2d30'
                          : 'rgba(255, 255, 255, 0.1)',
                      },
                    }),
                    placeholder: (base) => ({
                      ...base,
                      color: 'rgba(255, 255, 255, 0.5)',
                      fontSize: '14px',
                      fontWeight: 300,
                    }),
                    singleValue: (base) => ({
                      ...base,
                      color: '#fff',
                      fontSize: '14px',
                      fontWeight: 300,
                    }),
                    menu: (base) => ({
                      ...base,
                      backgroundColor: '#1a1a1a',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                    }),
                    option: (base, state) => ({
                      ...base,
                      backgroundColor: state.isSelected
                        ? 'rgba(255, 255, 255, 0.1)'
                        : state.isFocused
                          ? 'rgba(255, 255, 255, 0.05)'
                          : 'transparent',
                      color: '#fff',
                      fontSize: '14px',
                      fontWeight: 300,
                      cursor: 'pointer',
                      '&:active': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }),
                    indicatorSeparator: () => ({
                      display: 'none',
                    }),
                    dropdownIndicator: (base) => ({
                      ...base,
                      color: 'rgba(255, 255, 255, 0.7)',
                      '&:hover': {
                        color: 'rgba(255, 255, 255, 0.9)',
                      },
                    }),
                  }}
                  value={TOPIC_OPTIONS.find((option) => option.value === field.value) || null}
                  onChange={(selectedOption) => {
                    field.onChange(selectedOption ? selectedOption.value : '');
                  }}
                />
              )}
            />
            {errors.topicOfInquiry && (
              <p className={styles.error}>{errors.topicOfInquiry.message}</p>
            )}
          </div>

          {/* Tell Us More */}
          <div className={`${styles.formGroup} ${styles.textarea}`}>
            <label htmlFor="description">
              TELL US MORE
            </label>
            <textarea
              id="description"
              placeholder="Enter your message"
              {...register('description')}
              className={errors.description ? styles.errorInput : ''}
            />
            {errors.description && (
              <p className={styles.error}>{errors.description.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading
              ? 'Loading...'
              : 'Send Inquiry'}
          </button>
          {isSuccess && 
          <div className={styles.successMessage}>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M4.16656 6.32079L7.99656 2.49121L8.58573 3.08038L4.16656 7.49954L1.51489 4.84788L2.10406 4.25871L4.16656 6.32079Z" fill="#ffe400"/>
          </svg>
            </span>
          <p>Message received</p>
          </div>
          }
        </form>
      </div>
      {/**isSuccess && <ContactFormSuccess onClose={() => setIsSuccess(false)} /> */}
    </>
  );
};
