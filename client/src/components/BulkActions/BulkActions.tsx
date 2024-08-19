import { IconCancel, IconCircleDashedCheck, IconTruckDelivery, IconTruckReturn } from '@tabler/icons-react';
import React, { useState } from 'react';
import { Status } from '../../generated/types';
import { updateStatusInBulk } from '../../services/products.service';
import { ConfirmActionDialog } from '../ConfirmActionDialog/ConfirmDeleteDialog';
import { BulkActionsButton } from './Button';
import { IconParkingCircle } from '@tabler/icons-react';

export const BulkActions = ({ checkedItems, onCancelAction, onProductsUpdate }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<Status | null>(null);

  const changeStatus = async (status: Status) => {
    setCurrentStatus(status);
    setIsDialogOpen(true);
  };

  const handleConfirm = async () => {
    if (!currentStatus) return;
    const checkedItemsIds = checkedItems.map((checkedItem) => checkedItem.id);
    const products = await updateStatusInBulk(checkedItemsIds, currentStatus);
    
    onProductsUpdate(products);
  };

  return (
    <>
      {isDialogOpen && (
        <ConfirmActionDialog
          onConfirm={() => handleConfirm()}
          onCancel={() => onCancelAction()}
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          itemsToBeUpdated={checkedItems}
        />
      )}

      <div className={`
        flex gap-2 fixed bottom-2 right-1/2 translate-x-1/2
        bg-[#4c4c4c] py-2 px-5 rounded-full z-50 w-max items-center`
      }>
        <span className='text-[#ffffff5e] w-fit'>{checkedItems.length} selecionados</span>

        <BulkActionsButton
          icon={<IconCircleDashedCheck size={20} stroke={2} />}
          label="Concluir"
          onClick={ () => changeStatus(Status.DONE) }
        />

        <BulkActionsButton
          icon={<IconTruckDelivery size={20} stroke={2} />}
          label="Marcar como enviado"
          onClick={ () => changeStatus(Status.SENT) }
        />

        <BulkActionsButton
          icon={<IconTruckReturn size={20} stroke={2} />}
          label="Marcar como devolvido"
          onClick={ () => changeStatus(Status.RETURNED) }
        />

        <BulkActionsButton
          icon={<IconParkingCircle size={20} stroke={2} />}
          label="Marcar como pendente"
          onClick={ () => changeStatus(Status.PENDING) }
        />

        <BulkActionsButton
          icon={<IconCancel size={20} stroke={2} />}
          label="Cancelar"
          onClick={ () => changeStatus(Status.CANCELED) }
        />
      </div>
    </>
  )
}