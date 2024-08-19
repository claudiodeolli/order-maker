import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import React, { useState } from "react";

export function EditProductDialog({
  selectedItem,
  isOpen,
  onOpenChange,
  onConfirm
}) {
  const [name, setName] = useState(selectedItem.name);
  const [price, setPrice] = useState(selectedItem.price);

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Editar produto</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Edite as informações do produto
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Nome
            </Text>
            <TextField.Root
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Escreva o nome do produto"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Valor (BRL)
            </Text>
            <TextField.Root
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Escreva o valor do produto"
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray" onClick={() => { onOpenChange(true); }}>
              Cancelar
            </Button>
          </Dialog.Close>
          <Dialog.Close onClick={() => { onConfirm({ name, price }); onOpenChange(false); }}>
            <Button>Salvar</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}