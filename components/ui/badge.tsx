import React from 'react'
import { cn } from '@/lib/utils'
import { BadgeProps } from '@/types'

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'info', className }) => {
    const variants = {
        success: 'bg-green-100 text-green-800',
        warning: 'bg-yellow-100 text-yellow-800',
        danger: 'bg-red-100 text-red-800',
        info: 'bg-blue-100 text-blue-800',
    }

    return (
        <span
            className={cn(
                'inline-flex px-2 py-1 text-xs font-medium rounded-full',
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    )
}
