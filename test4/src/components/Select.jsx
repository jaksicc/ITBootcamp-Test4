const Select = ({ select, setSelect }) => {
    return (
        <>
            <select onChange={(e) => setSelect(e.target.value)} value='-1' >
                <option value="-1" disabled>Izaberite broj lansiranja</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
        </>
    )
}

export default Select