import { DropdownMenu } from "@radix-ui/themes";
import { IconDotsVertical } from "@tabler/icons-react";
import React, { useState } from "react";
import { Status } from "../../generated/types";
import { updateProduct, updateProductStatus } from "../../services/products.service";
import { EditProductDialog } from "../EditProductDialog/EditProductDialog";

export function DropdownActions({ selectedItem, onProductUpdate }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleUpdateProductStatus = async (status: Status) => {
    const product = await updateProductStatus(selectedItem, status);
    onProductUpdate(product);
  };

  const handleConfirm = async (formValue: { name: string, price: number }) => {
    const product = await updateProduct(selectedItem, formValue);
    console.log(product);
    onProductUpdate(product);
  };

  const handleAction = (status: Status) => {};

  return (
    <>
      {selectedItem && isDialogOpen && (
        <EditProductDialog
          onConfirm={handleConfirm}
          selectedItem={selectedItem}
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        />
      )}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <div
            className={`
          bg-[#f1f1f1] rounded-lg p-1
          hover:bg-[#e0e0e0] cursor-pointer
          transition-all
        `}
          >
            <IconDotsVertical color={"#757575"} stroke={2} size={20} />
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item
            onClick={() => handleUpdateProductStatus(Status.DONE)}
          >
            Concluir
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onClick={() => handleUpdateProductStatus(Status.SENT)}
          >
            Marcar como enviado
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onClick={() => handleUpdateProductStatus(Status.RETURNED)}
          >
            Marcar como devolvido
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onClick={() => handleUpdateProductStatus(Status.CANCELED)}
          >
            Marcar como cancelar
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item
            color='blue'
            onClick={() => setIsDialogOpen(true)}
          >
            Editar
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </>
  );
}
