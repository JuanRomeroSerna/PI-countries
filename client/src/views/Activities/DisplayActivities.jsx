import axios from "axios";
import style from "./DisplayActivities.module.css";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

const DisplayActivities = () => {
  const allActivities = useSelector((state) => state.activities);

  const onClickDelete = (id) => {
    window.location.reload(false);
    axios
      .delete(`http://localhost:3001/activities/${id}`)
      .then((res) => alert(res))
      .catch((error) => alert(error));
  };

  return (
    <div>
      <h2>Activities list</h2>
      <table className={style.container}>
        <thead>
          <tr>
            <th>Activity name</th>
            <th>Difficulty</th>
            <th>Duration</th>
            <th>Season</th>
            <th>Countries</th>
            <th>Delete</th>
          </tr>
        </thead>

        {allActivities?.map((activity) => {
          return (
            <tbody>
              <tr>
                <th>{activity.name}</th>
                <th>{activity.difficulty}</th>
                <th>{activity.duration}</th>
                <th>{activity.season}</th>
                <th>
                  {activity.countries.map((country) => {
                    return <p>{country.name}</p>;
                  })}
                </th>
                <th>
                  <button onClick={() => onClickDelete(activity.id)}>
                    {" "}
                    ❌ Delete
                  </button>
                </th>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default DisplayActivities;
