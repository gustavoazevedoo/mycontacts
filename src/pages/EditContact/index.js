import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

export default function EditContact() {
  return (
    <>
      <PageHeader
        title="Editar Gustavo Azevedo"
      />

      <ContactForm
        buttonLabel="Salvar alterações"
      />
    </>
  );
}
