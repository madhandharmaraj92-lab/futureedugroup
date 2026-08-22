'use client';

import { createContext, useContext } from 'react';

type OpenInquiry = (division?: string) => void;

const InquiryContext = createContext<OpenInquiry>(() => undefined);

export const InquiryProvider = InquiryContext.Provider;

export const useInquiry = (): OpenInquiry => useContext(InquiryContext);
