

const Sidebar = ({recepiequeue, handleRemove, deletedItems, totalTime, totalCalories}) => {
    return (
        <div className="md:w-1/3 border-2 p-1 rounded-lg mt-1">
            {/* want to cook table */}
            <div className="overflow-x-auto">
                  <h2 className="font-bold border-b-2 text-center text-lg">Want to cook : {recepiequeue.length}</h2>
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                               recepiequeue.map((item, index) =>{
                                return(

                             <tr className="hover" key={index}>
                                <th>{index + 1}</th>
                                <td>{item.recipe_title}</td>
                                <td>{item.preparing_time}</td>
                                <td>{item.calories}</td>
                                <td> <button onClick={() => handleRemove(item.recipe_id, item.preparing_time, item.calories)} className="btn rounded-full bg-green-500 text-white">preparing</button></td>
                            </tr>
                                )
                               }) 
                            }
                        </tbody>
                    </table>
            </div>
            {/* current cooking table */}

            <div className="overflow-x-auto mt-8">
                  <h2 className="font-bold border-b-2 text-center text-lg">Curently Cooking : {deletedItems.length}</h2>
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                               deletedItems.map((item, index) =>{
                                return(

                             <tr className="hover" key={index}>
                                <th>{index + 1}</th>
                                <td>{item.recipe_title}</td>
                                <td>{item.preparing_time}</td>
                                <td>{item.calories}</td>
                            </tr>
                           
                                )
                               }) 
                            }
                            <tr>
                                <th></th>
                                <td></td>
                                <td>total time : {totalTime}</td>
                                <td>total calores : {totalCalories}</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    );
};

export default Sidebar;

