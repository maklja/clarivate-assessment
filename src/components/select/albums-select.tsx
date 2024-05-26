import { forwardRef, useEffect, useState, SyntheticEvent } from 'react';
import { useInView } from 'react-intersection-observer';
import Select from 'react-dropdown-select';
import styles from './select.module.scss';
import { useAlbums } from '../../hooks/album/useAlbums';
import { Album } from '../../api/album';

interface SelectItemProps {
    id: number;
    text: string;
    selected: boolean;
    onClick?: (id: number) => void;
}

const SelectItem = forwardRef<HTMLDivElement | null, SelectItemProps>(
    function SelectItem({ id, selected, text, onClick }, ref) {
        function handleClick(e: SyntheticEvent<HTMLDivElement>) {
            e.stopPropagation();
            onClick?.(id);
        }

        return (
            <div
                ref={ref}
                className={`${styles['select-item']} ${
                    selected ? styles['select-item--active'] : ''
                }`}
                onClick={handleClick}
            >
                {text}
            </div>
        );
    }
);

export interface AlbumsSelectProps {
    onChange?: (album: Album) => void;
}

export function AlbumsSelect({ onChange }: AlbumsSelectProps) {
    const [open, setOpen] = useState(false);
    const { ref, inView } = useInView({
        skip: !open,
    });
    const { isFetching, data, isError, hasNextPage, fetchNextPage } =
        useAlbums();
    const [selected, setSelected] = useState<Album[]>([]);

    useEffect(() => {
        if (inView && hasNextPage && !isFetching) {
            fetchNextPage();
        }
    }, [inView, isFetching, fetchNextPage, hasNextPage, data?.pageParams]);

    const albums = data?.pages.flat() ?? [];
    function handleAlbumClick(albumId: number) {
        const album = albums.find((album) => album.id === albumId);
        if (!album) {
            return;
        }

        setSelected([album]);
    }

    function handleAlbumChange(selectedAlbums: Album[]) {
        const [selectedAlbum] = selectedAlbums;
        if (!selectedAlbum) {
            return;
        }

        onChange?.(selectedAlbum);
    }

    return (
        <>
            <div className={styles['select-container']}>
                <Select
                    searchable={false}
                    options={albums}
                    labelField="title"
                    valueField="id"
                    onChange={handleAlbumChange}
                    values={selected}
                    onDropdownOpen={() => setOpen(true)}
                    onDropdownClose={() => setOpen(false)}
                    itemRenderer={({ item, itemIndex = 0, state }) => (
                        <SelectItem
                            ref={itemIndex === albums.length - 1 ? ref : null}
                            id={item.id}
                            text={item.title}
                            selected={state.values.includes(item)}
                            onClick={handleAlbumClick}
                        />
                    )}
                    placeholder="Select album"
                    loading={isFetching}
                />
            </div>
            {isError ? (
                <div className={styles['select-error-message']}>
                    Failed to load albums. Please try again later.
                </div>
            ) : null}
        </>
    );
}
