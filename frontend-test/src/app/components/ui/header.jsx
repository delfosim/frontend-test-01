import SearchBar from "./searchBar";

 export function HeaderSearchBar(){
    return (
        <header className="border-solid border-2 border-b-neutral-300"> 
            <div className="w-100vw h-20 flex justify-around gap-60 items-center">
                <img
                    src='/images/delfos-icon.png'
                    alt="delfosim icon"
                    className='h-12'
                />
                <SearchBar />
            </div>
        </header>
    )
}

 export function Header(){
    return (
        <header className="border-solid border-2 border-b-neutral-300">
            <div className="w-100vw h-20 flex justify-around gap-60 items-center">
                <img
                    src='/images/delfos-icon.png'
                    alt="delfosim icon"
                    className='h-12'
                />
                <div className='w-96'></div>
            </div>
        </header>
    )
}