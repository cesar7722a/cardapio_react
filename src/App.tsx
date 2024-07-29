
import { MouseEvent, useState } from "react";
import hamb1 from "../public/hamb-1.png";
import hamb2 from "../public/hamb-2.png";
import hamb3 from "../public/hamb-3.png";
import hamb4 from "../public/hamb-3.png";
import hamb5 from "../public/hamb-5.png";
import hamb6 from "../public/hamb-6.png";
import hamb7 from "../public/hamb-7.png";
import hamb8 from "../public/hamb-8.png";
import hamb9 from "../public/hamb-8.png";
import refri1 from "../public/refri-1.png";
import refri2 from "../public/refri-2.png";
import { ShoppingCart } from "lucide-react";
import { ModalCar } from "./components/modalCar";
import { useImmer } from "use-immer";

interface Carrinho {
  name: string | null,
  price: string | null,
  quantidade: number
}

function App() {

  const [isOpenModal, setisOpenModal] = useState(false);
  const [carrinho, updateCarrinho] = useImmer<Carrinho[]>([]);

  function openModal() {
    setisOpenModal(true)
  }

  function closeModal() {
    setisOpenModal(false)
  }

  function encrementarQuantidade(nameItem: string) {
    updateCarrinho(draft => {
      const element = draft.find(t => t.name === nameItem);
      if (element) {
        element.quantidade++
      }
    })
  }

  function decrementarQuantidade(nameItem: string) {
    updateCarrinho(draft => {
      const element = draft.find(t => t.name === nameItem);
      if (element && element.quantidade > 1) {
        element.quantidade--
      }
    })
  }

  function deletItem(nameItem: string) {
    updateCarrinho(draft => {
      const index = carrinho.findIndex(t => t.name === nameItem)
      draft.splice(index, 1)
    })

  }

  function addCarrinho(event: MouseEvent<HTMLButtonElement>) {

    const nameItem = event.currentTarget.getAttribute('data-name')
    const priceItem = event.currentTarget.getAttribute('data-price')

    updateCarrinho(draft => {

      const element = draft.find(t => t.name === nameItem)

      if (element) {
        element.quantidade++
      } else {
        draft.push(
          {
            name: nameItem,
            price: priceItem,
            quantidade: 1
          }
        )
      }
    }
    )
  }


  return (
    <div >
      <div className="h-[456px] bg-black flex items-center justify-center flex-col gap-5">
        <img
          src={hamb1}
          alt="imagem não encontrada"
          className="size-44 rounded-full"
        />
        <div className="flex justify-center items-center flex-col gap-2">
          <h1 className="font-bold text-2xl">Red Burguer</h1>
          <p className="">Rua dev sucesso, 12, Campo Grande, MS</p>
          <button
            className="font-bold text-lg bg-[#54CC0A] px-2 py-1 rounded">
            Seg á Dom - 18:00 as 22:00
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-16 pb-12 mt-16">

        <h2 className="text-center font-bold text-3xl">Conheça nosso menu</h2>

        <div className="flex flex-wrap gap-10 px-2 justify-center">

          <div className="flex gap-4 w-[612px] h-36">
            <img
              src={hamb2} alt="img"
              className="size-36 rounded hover:scale-110 hover:-rotate-2 duration-300"
            />
            <div className="w-[454px] space-y-1">
              <span className="font-bold text-lg">Cheese Burger Duplo</span>
              <p>
                Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa
              </p>
              <div className="flex items-center justify-between py-4">
                <span className="font-medium text-lg">R$ 35,00</span>
                <button
                  data-name="Cheese Burger Duplo"
                  data-price="35,00s"
                  onClick={addCarrinho}
                >
                  <ShoppingCart />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-4 w-[612px] h-36">
            <img
              src={hamb3} alt="img"
              className="size-36 rounded hover:scale-110 hover:-rotate-2 duration-300"
            />
            <div className="w-[454px] space-y-1">
              <span className="font-bold text-lg">hamburguer smash</span>
              <p>
                Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa
              </p>
              <div className="flex items-center justify-between py-4">
                <span className="font-medium text-lg">R$ 33,00</span>
                <button
                  data-name="hamburguer smash"
                  data-price="33,00"
                  onClick={addCarrinho}
                >
                  <ShoppingCart />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-4 w-[612px] h-36">
            <img
              src={hamb4} alt="img"
              className="size-36 rounded hover:scale-110 hover:-rotate-2 duration-300"
            />
            <div className="w-[454px] space-y-1">
              <span className="font-bold text-lg">Smash Burger</span>
              <p>
                Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa
              </p>
              <div className="flex items-center justify-between py-4">
                <span className="font-medium text-lg">R$ 45,00</span>
                <button
                  data-name="Smash Burger"
                  data-price="45,00"
                  onClick={addCarrinho}
                >
                  <ShoppingCart />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-4 w-[612px] h-36">
            <img
              src={hamb5} alt="img"
              className="size-36 rounded hover:scale-110 hover:-rotate-2 duration-300"
            />
            <div className="w-[454px] space-y-1">
              <span className="font-bold text-lg">Cheese Bacon</span>
              <p>
                Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa
              </p>
              <div className="flex items-center justify-between py-4">
                <span className="font-medium text-lg">R$ 20,00</span>
                <button
                  data-name="Cheese Bacon"
                  data-price="20,00"
                  onClick={addCarrinho}
                >
                  <ShoppingCart />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-4 w-[612px] h-36">
            <img
              src={hamb6} alt="img"
              className="size-36 rounded hover:scale-110 hover:-rotate-2 duration-300"
            />
            <div className="w-[454px] space-y-1">
              <span className="font-bold text-lg">Cheese Burger</span>
              <p>
                Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa
              </p>
              <div className="flex items-center justify-between py-4">
                <span className="font-medium text-lg">R$ 50,00</span>
                <button
                  data-name="Cheese Burger"
                  data-price="50,00"
                  onClick={addCarrinho}
                >
                  <ShoppingCart />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-4 w-[612px] h-36">
            <img
              src={hamb7} alt="img"
              className="size-36 rounded hover:scale-110 hover:-rotate-2 duration-300"
            />
            <div className="w-[454px] space-y-1">
              <span className="font-bold text-lg">Hamburguer Duplo</span>
              <p>
                Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa
              </p>
              <div className="flex items-center justify-between py-4">
                <span className="font-medium text-lg">R$ 55,00</span>
                <button
                  data-name="Hamburguer Duplo"
                  data-price="55,00"
                  onClick={addCarrinho}
                >
                  <ShoppingCart />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-4 w-[612px] h-36">
            <img
              src={hamb8} alt="img"
              className="size-36 rounded hover:scale-110 hover:-rotate-2 duration-300"
            />
            <div className="w-[454px] space-y-1">
              <span className="font-bold text-lg">Hamburguer Salad</span>
              <p>
                Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa
              </p>
              <div className="flex items-center justify-between py-4">
                <span className="font-medium text-lg">R$ 60,00</span>
                <button
                  data-name="Hamburguer Salad"
                  data-price="60,00"
                  onClick={addCarrinho}
                >
                  <ShoppingCart />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-4 w-[612px] h-36">
            <img
              src={hamb9} alt="img"
              className="size-36 rounded hover:scale-110 hover:-rotate-2 duration-300"
            />
            <div className="w-[454px] space-y-1">
              <span className="font-bold text-lg">Hamburguer Casa</span>
              <p>
                Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa
              </p>
              <div className="flex items-center justify-between py-4">
                <span className="font-medium text-lg">R$ 35,00</span>
                <button
                  data-name="Hamburguer Casa"
                  data-price="35,00"
                  onClick={addCarrinho}
                >
                  <ShoppingCart className=" hover:scale-110 duration-300" />
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col gap-10">
          <h2 className="text-center font-bold text-3xl">Bebidas</h2>

          <div className="flex flex-wrap gap-10 px-2 justify-center">

            <div className="flex gap-4 w-[612px] h-36">
              <img
                src={refri1} alt="img"
                className="size-36 rounded hover:scale-110 hover:-rotate-2 duration-300"
              />
              <div className="w-[454px] space-y-1">
                <span className="font-bold text-lg">Coca Cola</span>
                <div className="flex items-center justify-between py-4">
                  <span className="font-medium text-lg">12,00 AKZ</span>
                  <button
                    data-name="coca cola"
                    data-price="12,00"
                    onClick={addCarrinho}
                  >
                    <ShoppingCart className=" hover:scale-110 duration-300" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-4 w-[612px] h-36">
              <img
                src={refri2} alt="img"
                className="size-36 rounded hover:scale-110 hover:-rotate-2 duration-300"
              />
              <div className="w-[454px] space-y-1">
                <span className="font-bold text-lg">Yala</span>
                <div className="flex items-center justify-between py-4">
                  <span className="font-medium text-lg">15,00 AKZ</span>
                  <button
                    data-name="Yala"
                    data-price="15,00"
                    onClick={addCarrinho}
                  >
                    <ShoppingCart className=" hover:scale-110 duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {
        carrinho.length != 0 &&
        <div className="fixed font-bold bg-red-800 w-24 cursor-pointer bottom-12 right-10 h-12 flex justify-center items-center gap-2 rounded shadow-2xl"
          onClick={openModal}
        >
          <span>{carrinho.length}</span>
          <ShoppingCart className=" hover:scale-110 duration-300" />
        </div>
      }

      {
        isOpenModal && (
          <ModalCar
            carrinho={carrinho}
            deletItem={deletItem}
            closeModal={closeModal}
            decrementarQuantidade={decrementarQuantidade}
            encrementarQuantidade={encrementarQuantidade}
          />
        )
      }

    </div>
  )
}


export default App
