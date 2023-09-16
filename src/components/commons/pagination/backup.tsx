import clsx from 'clsx';
// import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Icon from '../icon';

export default function Pagination({
    className,
    // data,
    // itemsPerPage = 5,
    // offset = 0,
    handlePageClick,
    pageCount,
}: Props) {
    
    // const [itemOffset, setItemOffset] = useState<number>(offset);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    // const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    // const currentItems = data.slice(itemOffset, endOffset);
    // const pageCount = Math.ceil(data.length / itemsPerPage);

    // Invoke when user click to request another page.
    // const handlePageClick = (event: any) => {
    //     const newOffset = (event.selected * itemsPerPage) % data.length;
    //     console.log(
    //         `User requested page number ${event.selected + 1}, which is offset ${newOffset}`
    //     );
    //     console.log(newOffset, 'new offset');
    //     setItemOffset(newOffset);
    // };

    return (
        <div className={clsx('flex flex-row justify-between items-center', className)}>
            <ReactPaginate
                containerClassName='flex flex-row justify-between items-center space-x-4'
                breakLabel='...'
                previousLabel={<Icon name='chevron-left' width={8} />}
                nextLabel={<Icon name='chevron-right' width={8} />}
                previousClassName='flex justify-center items-center h-6 w-6 rounded-full hover:bg-primary/10 on-hover'
                nextClassName='flex justify-center items-center h-6 w-6 rounded-full hover:bg-primary/10 on-hover'
                breakClassName='flex justify-center items-center h-6 w-6 rounded-full hover:bg-primary/10 on-hover'
                pageClassName='flex justify-center items-center h-6 w-6 rounded-full'
                pageLinkClassName='text-sm'
                activeClassName='flex justify-center items-center h-6 w-6 bg-primary hover:bg-primary rounded-full'
                activeLinkClassName='text-sm text-white'
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
            />
        </div>
    );
}

interface Props {
    className?: string;
    itemsPerPage?: number;
    data?: any;
    offset?: number;
    handlePageClick?: any;
    pageCount?: any;
}
