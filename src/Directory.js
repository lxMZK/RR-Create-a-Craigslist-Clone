function Directroy() {
    return (
        <div className="directory">
            <form>
                <select>
                    <option>gallery</option>
                </select>
            </form>
            <form>
                <button>{`<<`}</button>
                <button>{`<prev`}</button>
                <button>1 - 120 / 3000</button>
                <button>next></button>
            </form>
        </div>
    )
}

export default Directroy