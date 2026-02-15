import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx and tailwind-merge for optimal class handling
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format currency for Russian locale
 */
export function formatCurrency(amount: number, currency: string = 'RUB'): string {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Format number for Russian locale
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('ru-RU').format(num)
}

/**
 * Format area in square meters
 */
export function formatArea(area: number): string {
  return `${formatNumber(area)} м²`
}

/**
 * Format volume in cubic meters
 */
export function formatVolume(volume: number): string {
  return `${formatNumber(volume)} м³`
}

/**
 * Format percentage
 */
export function formatPercentage(value: number): string {
  return `${(value * 100).toFixed(1)}%`
}
