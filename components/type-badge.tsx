import React from 'react'
import { TypeBadgeProps } from '@/lib/data/intefaces';


export default function TypeBadge({ name }: TypeBadgeProps) {
    
    return (
        <span className={`badge badge-${name}`}>
            {name}
        </span>
    )
}

export 
function TypeBadgeXL({ name }: TypeBadgeProps) {
    
    return (
        <span className={`badgeXL badge-${name}`}>
            {name}
        </span>
    )
}