import React from 'react'
import { TypeBadgeProps } from '@/lib/data/intefaces';
import { capitalize } from '@/lib/util';

export default function TypeBadge({ name }: TypeBadgeProps) {
    
    return (
        <span className={`badge badge-${name}`}>
            {capitalize(name)}
        </span>
    )
}

export 
function TypeBadgeXL({ name }: TypeBadgeProps) {
    
    return (
        <span className={`badgeXL badge-${name}`}>
            {capitalize(name)}
        </span>
    )
}