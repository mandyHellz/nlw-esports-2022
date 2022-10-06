import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

const CreateAdBanner = () => {
  return (
    <div className="bg-nlw-gradient self-stretch rounded-lg overflow-hidden pt-1 mt-8">
      <div className="bg-[#2A2634] px-8 py-6 flex flex-col sm:flex-row gap-10 sm:gap-0 justify-between items-center">
        <div className="text-center sm:text-left">
          <strong className="text-2xl text-white font-black block">
            Não encontrou seu duo?
          </strong>
          <span className="text-zinc-400 block">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <Dialog.Trigger className="flex items-center gap-3 py-3 px-4 truncate bg-violet-500 hover:bg-violet-600 text-white rounded">
          <MagnifyingGlassPlus size="25px" />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
};

export default CreateAdBanner;
