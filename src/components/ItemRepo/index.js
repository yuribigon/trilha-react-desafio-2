import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer onClick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <button onClick={() => window.open(repo.html_url, '_blank')} className="ver-repo">Ver repositório</button><br />
        <button onClick={handleRemove}  className="remover">Remover</button>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
