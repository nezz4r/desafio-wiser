import { Menu } from 'components';

function MenuLayout() {
  return (
    <Menu>
      <Menu.Title>
        Olá, seja
        <br /> bem-vindo!
      </Menu.Title>
      <Menu.SubTitle>
        Para acessar a plataforma,
        <br /> faça seu login.
      </Menu.SubTitle>
    </Menu>
  );
}

export default MenuLayout;
