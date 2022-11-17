import React, { useState } from "react";
import API from "../api";
import { fetchAll } from "../api/fake.api/user.api";

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
  let usersQualityArrays = users.map((user) =>
    console.log(user.qualities.map((qualityArrays) => qualityArrays.name))
  );
  const params = [
    "Имя",
    "Качества",
    "Профессия",
    "Встретился, раз",
    "Оценка",
    "",
  ];
  return (
    <table className="table">
      <thead>
        <tr>
          {params.map((param) => (
            <th scope="col">{param}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user._id}>
            <td>{user.name.toString()}</td>
            {/* <td>{user.qualities.map((qualityArrays) => qualityArrays)}</td> */}
            <td>{user.profession.name.toString()}</td>
            <td>{user.completedMeetings.toString()}</td>
            <td>{user.rate.toString()}</td>
            <td>
              <button className="badge bg-danger">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const getQualities = (users, index) => {
  let userQuality = users[index].qualities.map((quality) => quality);
};
export default Users;

{
  /* <table class="table">
		<thead>
			<tr>
				<th scope="col">#</th>
				<th scope="col">First</th>
				<th scope="col">Last</th>
				<th scope="col">Handle</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">1</th>
				<td>Mark</td>
				<td>Otto</td>
				<td>@mdo</td>
			</tr>
			<tr>
				<th scope="row">2</th>
				<td>Jacob</td>
				<td>Thornton</td>
				<td>@fat</td>
			</tr>
			<tr>
				<th scope="row">3</th>
				<td colspan="2">Larry the Bird</td>
				<td>@twitter</td>
			</tr>
		</tbody>
		</table> */
}
