import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import { Select } from '../../components/Select';

export default function NewContact() {
  return (
    <>
      <PageHeader
        title="Novo contato"
      />

      <Input type="text" placeholder="Nome" />
      <Select>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
      </Select>

      <Button type="button">Cadastrar</Button>
      <Button type="button" disabled>Cadastrar</Button>
    </>
  );
}
