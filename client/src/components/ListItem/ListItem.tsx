import { Badge } from "@radix-ui/themes";
import { IconCheck } from "@tabler/icons-react";
import React from "react";
import { Product } from "../../generated/types";
import { statusColor, statusName } from "../../utils/product.mapper";
import { DropdownActions } from "../DropdownActions/DropdownActions";

export function ListItem({ item, onCheckChange, checked, onProductsUpdate }) {
  const handleCheckClick = (id: string) => {
    onCheckChange(id);
  };

  const handleDropdownAction = (product: Product) => {
    onProductsUpdate([product]);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div
      className={`
      flex items-center justify-between
      rounded-lg hover:shadow-[0_0_0_1px_rgba(255,165,0,1)] shadow-sm
      px-2 py-3 bg-white hover:scale-[1.005] transition-all`}
    >
      <div className="flex items-center gap-2">
        <div
          onClick={() => handleCheckClick(item.id)}
          className={`
            flex items-center cursor-pointer justify-center
            w-6 h-6 hover:border-[#FFA500] transition-all
            max-h-6 max-w-6 border-2 border-solid rounded-md p-1
          `}
          style={{ borderColor: checked ? "#FFA500" : "#d4def1" }}
        >
          {checked && <IconCheck color={"#FFA500"} stroke={5} />}
        </div>

        <span>{item.name}</span>
        <Badge color="blue">#{item.identifier}</Badge>
      </div>
      <div className="flex gap-3">
        <Badge size="2" color='green'>
          { Number(item.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
        </Badge>

        <Badge size="2" color={statusColor[item.status] || "blue"}>
          {statusName[item.status] || item.status}
        </Badge>

        <Badge size="2" color="gray">
          {formatDate(item.updatedAt)}
        </Badge>

        <DropdownActions
          selectedItem={item}
          onProductUpdate={handleDropdownAction}
        />
      </div>
    </div>
  );
}
