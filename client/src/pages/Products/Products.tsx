import { Checkbox, Flex, Skeleton, Text, TextField } from "@radix-ui/themes";
import { IconSearch } from "@tabler/icons-react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ToastContainer, Zoom, toast } from "react-toastify";
import { useDebounce } from "use-debounce";
import { BulkActions } from "../../components/BulkActions/BulkActions";
import { Header } from "../../components/Header/Header";
import { ListItem } from "../../components/ListItem/ListItem";
import { Product } from "../../generated/types";
import ProgressBarComponent from "../../hooks/LoadingHook";
import {
  fetchFilteredProducts,
  fetchProducts,
} from "../../services/products.service";
import { listItemMotion, listMotion } from "../../utils/listMotionAnimation";

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [checkedItems, setCheckedItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [value] = useDebounce(searchTerm, 300);
  const [isAllChecked, setAllIsChecked] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await fetchFilteredProducts(value);
      setProducts(products);
    };

    fetchProducts();
  }, [value]);

  const handleCheckboxChange = (checked: boolean) => {
    setAllIsChecked(checked);
    if (checked) {
      setCheckedItems(products);
    } else {
      setCheckedItems([]);
    }
  };

  const handleCheckChange = (product: Product) => {
    setCheckedItems((prevCheckedItems) => {
      const index = prevCheckedItems.findIndex(
        (item) => item.id === product.id
      );
      if (index > -1) {
        return prevCheckedItems.filter((_, i) => i !== index);
      }

      return [...prevCheckedItems, product];
    });
  };

  const handleProductsUpdate = (products: Product[]) => {
    updateRenderedProducts(products);
    setCheckedItems([]);
    setAllIsChecked(false);
    showNotify();
  };

  const showNotify = () => {
    toast.success("Atualizado com sucesso!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
      transition: Zoom,
    });
  };

  const handleOnCancelAction = () => {
    setCheckedItems([]);
  };

  const updateRenderedProducts = (products: Product[]) => {
    setProducts((prevProducts) => {
      const productMap = new Map(
        prevProducts.map((product) => [product.id, product])
      );

      products.forEach((product) => {
        productMap.set(product.id, product);
      });

      return Array.from(productMap.values()).sort((a, b) =>
        b.updatedAt.localeCompare(a.updatedAt)
      );
    });
  };

  const [pagination, setPagination] = useState({
    take: 20,
    skip: 0,
  });

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      const products = await fetchProducts(pagination.take, pagination.skip);
      setProducts(products);
      setIsLoading(false);
    };

    loadProducts();
  }, []);

  const fetchMoreData = () => {
    const skip = pagination.skip + pagination.take;
    setIsLoading(true);
    fetchProducts(pagination.take, skip)
      .then((newProducts) => {
        if (newProducts.length === 0) {
          setHasMore(false);
        } else {
          setPagination((prevPagination) => ({ ...prevPagination, skip }));
          setProducts((prevProducts) => [...prevProducts, ...newProducts]);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && (
        <div className="z-50 fixed translate-x-0 left-0 top-0 w-full">
          <ProgressBarComponent />
        </div>
      )}

      <ToastContainer />
      <div
        className={`transition-opacity ${
          checkedItems.length ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <BulkActions
          onCancelAction={handleOnCancelAction}
          onProductsUpdate={handleProductsUpdate}
          checkedItems={checkedItems}
        />
      </div>
      <div className="flex flex-col gap-8">
        <Header />
        <div className="flex flex-col gap-3">
          <div className="flex items-end justify-between">
            <h1 className="font-medium text-xl">Produtos</h1>
            <div className="flex justify-center items-center gap-5">
              <Text as="label" size="4">
                <Flex as="span" gap="2">
                  {isAllChecked ? (<span>Desmarcar todos</span>) : (<span>Marcar todos</span>)}
                  <Checkbox
                    size="3"
                    defaultChecked
                    checked={isAllChecked}
                    onClick={() => handleCheckboxChange(!isAllChecked)}
                  />
                </Flex>
              </Text>

              <TextField.Root
                color="orange"
                size="2"
                placeholder="Pesquisar produtos..."
                onChange={(e) => setSearchTerm(e.target.value)}
              >
                <TextField.Slot>
                  <IconSearch stroke={2} size={16} />
                </TextField.Slot>
              </TextField.Root>
            </div>
          </div>
          {products.length === 0 && !isLoading && (
            <div className="absolute -top-8 flex items-center justify-center h-screen w-full">
              <span className="m-auto">Nenhum produto encontrado</span>
            </div>
          )}
          {products.length === 0 && isLoading && (
            <div className="flex flex-col gap-3">
              {Array.from({ length: 20 }, (_, index) => (
                <Skeleton
                  className="h-[52px] w-full !rounded-lg overflow-hidden"
                  key={index}
                >
                  Loading
                </Skeleton>
              ))}
            </div>
          )}
          {products.length > 0 && (
            <InfiniteScroll
              dataLength={products.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={
                products.length > pagination.take && (
                  <div className="flex flex-col w-full gap-3 mt-3">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Skeleton
                        className="h-[52px] w-full !rounded-lg overflow-hidden"
                        key={index}
                      >
                        Loading
                      </Skeleton>
                    ))}
                  </div>
                )
              }
            >
              <div className="py-[1px] px-1">
                <motion.ul
                  className="flex flex-col gap-3"
                  initial="hidden"
                  animate="visible"
                  variants={listMotion}
                >
                  {products.map((product, index) => (
                    <motion.li
                      variants={listItemMotion}
                      key={`${product.id}-${index}`}
                    >
                      <ListItem
                        checked={checkedItems.some(
                          (item) => item.id === product.id
                        )}
                        item={product}
                        onProductsUpdate={handleProductsUpdate}
                        onCheckChange={() => handleCheckChange(product)}
                      />
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </InfiniteScroll>
          )}
        </div>
      </div>
    </>
  );
}
