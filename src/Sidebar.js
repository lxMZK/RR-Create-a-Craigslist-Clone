import Help from "./Help"

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>postings</h2>
            <div className="rad">
                <input type='radio' name='btns' id='all'></input>
                <label for='all'>all</label>
                <input type='radio' name='btns' id='owner'></input>
                <label for='owner'>owner</label>
                <input type='radio' name='btns' id='dealer'></input>
                <label for='dealer'>dealer</label>
            </div>
            <div>
                <br />
                <input type='checkbox'></input>
                <label>search titles only</label>
                <br />
                <input type='checkbox'></input>
                <label>has image</label>
                <br />
                <input type='checkbox'></input>
                <label>posted today</label>
                <br />
                <input type='checkbox'></input>
                <label>bundle duplicates</label>
                <br />
                <input type='checkbox'></input>
                <label>include nearby areas</label>
                <br />
            </div>
            <div className="other">
                <br />
                <label>MILES FROM ZIP</label>
                <br />
                <input type='Number' placeholder="miles"></input>
                <input type='Number' placeholder='from zip'></input>
            </div>
            <div className="other">
                <br />
                <label>PRICE</label>
                <br />
                <input type='Number' placeholder="min"></input>
                <input type='Number' placeholder='max'></input>
            </div>
            <div>
                <br />
                <label>MAKE AND MODEL</label>
                <br />
                <input type='text' placeholder="make / model"></input>
            </div>
            <div>
                <br />
                <br />
                <input type='checkbox'></input>
                <label>cryptocurrency ok</label>
                <br />
                <input type='checkbox'></input>
                <label>delivery available</label>
            </div>
            <div className="bot">
                <br/>
                <br/>
                <label>▸ language of posting</label>
                <br/>
                <label>▸ condition</label>
            </div>
            <Help />
        </div>
    )
}

export default Sidebar