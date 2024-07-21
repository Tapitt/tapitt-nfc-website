import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ImageName = ({ isVerified, username, size = 'sm', href }) => {
    const avatarSize =
        size === 'md'
            ? 'w-14 h-14'
            : size === 'lg'
            ? 'w-16 h-16'
            : size === 'xl'
            ? 'md:w-32 md:h-32 h-28 w-28'
            : size === 'sm'
            ? 'w-10 h-10'
            : 'w-7 h-7 md:w-10 md:h-10';
    const verifiedSize =
        size === 'md'
            ? 'w-14 h-14'
            : size === 'lg'
            ? 'w-16 h-16'
            : size === 'xl'
            ? 'md:w-14 md:h-14 h-12 w-12'
            : size === 'sm'
            ? 'w-5 h-5'
            : 'w-4 h-4 md:w-6 md:h-6';
    const imageSize = size === 'md' ? '56' : size === 'lg' ? '64' : size === 'xl' ? '128' : size === 'sm' ? '40' : '24';

    const Avatar = () => {
        return (
            <div className={`flex flex-row items-center space-x-3 md:space-x-4 ${cn('relative bg-theme-light-purple', avatarSize)}`}>
                {username && <p className="text-sm md:text-2xl font-semibold lowercase text-white whitespace-nowrap">@{username}</p>}
            </div>
        );
    };

    return (
        <>
            {href ? (
                <Link href={href}>
                    <Avatar />
                </Link>
            ) : (
                <Avatar />
            )}
        </>
    );
};

export default ImageName;
