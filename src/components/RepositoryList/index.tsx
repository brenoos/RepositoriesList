import React, { useState } from 'react';

interface Repository {
  id: number;
  name: string;
}

interface Props {
  repositories: Repository[];
}

const RepositoryList: React.FC<Props> = ({ repositories }) => {
    const [newRepository, setNewRepository] = useState('');


    return <ul>{repositories.map(repository => <li>{ repository.name }</li>)}</ul>;
};

export default RepositoryList;
