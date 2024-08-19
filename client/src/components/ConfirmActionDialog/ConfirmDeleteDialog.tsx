import React from 'react';
import { Button, Dialog, Flex, Table } from "@radix-ui/themes";
import { statusName } from "../../utils/product.mapper";

export function ConfirmActionDialog({
  isOpen,
  onOpenChange,
  onConfirm,
  onCancel,
  itemsToBeUpdated
}) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Content maxHeight="600px" maxWidth="550px">
        <Dialog.Title>Confirmar ação</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Você irá atualizar os seguintes produtos:
        </Dialog.Description>

        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Nome</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Identificador</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Situação</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {itemsToBeUpdated.map((item, index) => (
              <Table.Row key={`${item.id}-${index}`}>
                <Table.RowHeaderCell>{item.name}</Table.RowHeaderCell>
                <Table.Cell>#{item.identifier}</Table.Cell>
                <Table.Cell>{statusName[item.status] || item.status}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close onClick={() => { onCancel(); onOpenChange(true); }}>
            <Button variant="soft" color="gray">
              Cancelar
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={() => { onConfirm(); onOpenChange(false); }}>
              Confirmar
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};
