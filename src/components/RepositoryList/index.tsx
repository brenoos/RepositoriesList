import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/repositories/types';
import {
  loadRequest,
  loadSuccess,
  loadFailure,
} from '../../store/ducks/repositories/actions';

const RepositoryList: React.FC = () => {
  const repositories = useSelector(
    (state: ApplicationState) => state.repositories.data
  );
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRequest());
  });

  return (
    <ul>{repositories.map((repository: Repository) => repository.name)}</ul>
  );
};

export default RepositoryList;
