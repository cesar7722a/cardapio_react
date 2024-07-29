import { Minus, Plus, Trash2 } from "lucide-react";

interface Item {
  name: string
  price: string,
  quantidade: number
}

interface ModalCarProps {
  closeModal: () => void;
  deletItem: (name: string) => void;
  encrementarQuantidade: (name: string) => void;
  decrementarQuantidade: (name: string) => void;
  carrinho: Item[];

}

export function ModalCar({
  closeModal,
  carrinho,
  decrementarQuantidade,
  encrementarQuantidade,
  deletItem,
}: ModalCarProps) {

  const totalPrice: number = carrinho.reduce((cont, carrinho) => cont + parseFloat(carrinho.price) * carrinho.quantidade, 0)


  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[99] h-full w-full bg-black/60 flex justify-center shadow-shape items-center">
      <div className="bg-zinc-900 space-y-8 w-[456px] px-4 py-4 rounded">
        <h3 className="text-center font-bold text-xl">Carrrinho</h3>

        <div className="flex gap-2 justify-between">
          <span>Nome</span>
          <span>Quantidade</span>
          <span>Remover</span>
        </div>

        {
          carrinho.map(element =>
            <div key={element.name} className="flex gap-2 justify-between">
              <span>{element.name}</span>
              <div className="flex justify-center items-center gap-2">
                <button onClick={() => encrementarQuantidade(element.name)}>
                  <Plus className="size-5" />
                </button>
                <span>{element.quantidade}</span>
                <button onClick={() => decrementarQuantidade(element.name)}>
                  <Minus className="size-5" />
                </button>
              </div>
              <button onClick={() => deletItem(element.name)}><Trash2 className="size-5" /></button>
            </div>
          )
        }

        <div className="flex flex-col gap-2">
          <div className="font-bold text-lg">
            Preço Total: {
              totalPrice.toLocaleString("pt-AO", {
                style: "currency",
                currency: "AOA"
              })
            }
          </div>
          <div>
            <label htmlFor="" className="text-sm">Endereço de entrega</label>
            <input
              type="text"
              placeholder="digete o seu endereço"
              className="py-1.5 px-2 w-full rounded bg-transparent outline-none border border-zinc-400"
            />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button onClick={closeModal}>Fechar</button>
          <button>Finalizar Compra</button>
        </div>
      </div>
    </div>
  )
}