import clsx from 'clsx';
import Card from '../card/card';
import { useRouter } from 'next/navigation';
import Icon from '../icon';

export default function HeadingLink({ className, classNameTitle, classNameLabel, title, label, withBack = false, renderActions, loading }: Props) {
    const router = useRouter();

    return (
        <Card className={clsx('flex flex-row justify-between items-center w-full', className)} canHover={false}>
            <div className={clsx('flex flex-row justify-start items-center', withBack && 'space-x-4')}>
                {withBack && <div className='cursor-pointer' onClick={() => router.back()}>
                    <Icon name='chevron-left' className='fill-black' />
                </div>}
                <div className={clsx('flex flex-col justify-start items-start w-full bg-transparent', label && 'space-y-1')}>
                    <span className={clsx('text-base lg:text-xl text-white font-semibold', classNameTitle)}>{title}</span>
                    {label && loading ? (
                        <span className='rounded-full bg-light-700 h-4 w-2/3 animate-pulse' />
                    ) : (
                        <span className={clsx('text-white text-sm', classNameLabel)}>{label}</span>
                    )}
                </div>
            </div>
            {renderActions && renderActions}
        </Card>
    );
}

interface Props {
    className?: string;
    classNameTitle?: string;
    classNameLabel?: string;
    title?: string;
    label?: React.ReactNode;
    withBack?: boolean;
    renderActions?: React.ReactNode;
    loading?: boolean;
}
