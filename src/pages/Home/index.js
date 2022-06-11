import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  InputSearchContainer,
  Header,
  ListHeader,
  Card,
  ErrorContainer,
  EmptyListContainer,
  SearchNotFoundContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/empty-box.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg';

import Loader from '../../components/Loader';
import Button from '../../components/Button';

import formatPhone from '../../utils/formatPhone';
import ContactsService from '../../services/ContactsService';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const hasContactsRegistered = contacts.length > 0;

  const filteredContacts = useMemo(
    () => contacts.filter((contact) => (
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    )),
    [searchTerm, contacts],
  );

  const hasFoundContact = (contacts.length > 0 && filteredContacts.length > 0);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const contactsList = await ContactsService.listContacts(orderBy);

      setHasError(false);
      setContacts(contactsList);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleToggleOrderBy() {
    setOrderBy(
      (prevState) => (prevState === 'asc' ? 'desc' : 'asc'),
    );
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function handleTryAgain() {
    loadContacts();
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {
        hasContactsRegistered && (
          <InputSearchContainer>
            <input
              value={searchTerm}
              onChange={handleChangeSearchTerm}
              type="text"
              placeholder="Pesquisar contato..."
            />
          </InputSearchContainer>
        )
      }

      <Header justifyContent={
        // eslint-disable-next-line no-nested-ternary
          hasError
            ? 'flex-end'
            : (
              hasContactsRegistered
                ? 'space-between'
                : 'center'
            )
          }
      >
        {
          (!hasError && hasContactsRegistered) && (
            <strong>
              {filteredContacts.length}
              {' '}
              {filteredContacts.length === 1 ? 'contato' : 'contatos'}
            </strong>
          )
        }
        <Link to="/new">Novo contato</Link>
      </Header>

      { hasError && (
        <ErrorContainer>
          <img src={sad} alt="Sad" />
          <div className="details">
            <strong>Ocorreu um erro ao obter os seus contatos.</strong>
            <Button onClick={handleTryAgain}>Tentar novamente</Button>
          </div>
        </ErrorContainer>
      )}

      {
        !hasError && (
          <>
            {
              (!hasContactsRegistered && !isLoading) && (
                <EmptyListContainer>
                  <img src={emptyBox} alt="Empty Box" />
                  <p>
                    Você ainda não tem nenhum contato cadastrado!
                    Clique no botão
                    <strong> ”Novo contato” </strong>
                    à cima para cadastrar o seu primeiro!
                  </p>
                </EmptyListContainer>
              )
            }

            {
              !hasFoundContact && (
                <SearchNotFoundContainer>
                  <img src={magnifierQuestion} alt="Magnifier Question" />
                  <span>
                    Nenhum resultado foi encontrado para
                    {' '}
                    <strong>
                      {searchTerm}
                    </strong>
                    .
                  </span>
                </SearchNotFoundContainer>
              )
            }

            {filteredContacts.length > 0 && (
              <ListHeader orderBy={orderBy}>
                <button type="button" onClick={handleToggleOrderBy}>
                  <span>Nome</span>
                  <img src={arrow} alt="Arrow" />
                </button>
              </ListHeader>
            )}

            {filteredContacts.map((contact) => (
              <Card key={contact.id}>
                <div className="info">
                  <div className="contact-name">
                    <strong>{contact.name}</strong>
                    {contact.category_name && (
                    <small>{contact.category_name}</small>
                    )}
                  </div>
                  <span>{contact.email}</span>
                  <span>{formatPhone(contact.phone)}</span>
                </div>
                <div className="actions">
                  <Link to={`/edit/${contact.id}`}>
                    <img src={edit} alt="Edit" />
                  </Link>
                  <button type="button">
                    <img src={trash} alt="Delete" />
                  </button>
                </div>
              </Card>
            ))}
          </>
        )
      }
    </Container>
  );
}
