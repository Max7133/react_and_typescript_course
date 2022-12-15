import { Component } from 'react';

// User Interface
interface User {
  name: string;
  age: number;
}

// Prop Interface
interface UserSearchProps {
  // Array of Objects
  //   users: {
  //     name: string;
  //     age: number;
  //   }[];
  users: User[];
}

// State Interface
interface UserSearchState {
  name: string;
  user: User | undefined;
  //user: { name: string; age: number } | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  //   render() {
  //     this.props.users;
  //   }
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });

    this.setState({ user: foundUser });
  };

  render() {
    const { name, user } = this.state;

    return (
      <div>
        User Search
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>
        <div>
          {user && user.name}
          {user && user.age}
        </div>
      </div>
    );
  }
}

export default UserSearch;
