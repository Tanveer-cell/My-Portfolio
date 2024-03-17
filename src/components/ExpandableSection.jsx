import { motion, AnimatePresence } from 'framer-motion';

const ExpandableSection = ({ title, children, isOpen, toggle, hasSubsections }) => {
  return (
    <div className={`mb-4`}>
      <motion.div
        className={`flex justify-between items-center cursor-pointer ${isOpen && !hasSubsections ? 'bg-slate-50/10 rounded-md p-1' : ''}`}
        onClick={toggle}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className={`text-lg font-semibold`}>
          {title}
        </h2>
        <motion.div className={`ml-2 transition-transform transform ${isOpen ? 'rotate-[-90deg]' : 'rotate-0'}`}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 5.293a1 1 0 011.414 0L10 9.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mt-2 mb-8 lg:text-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Subsection = ({ title, children, isOpen, toggle }) => {
  return (
    <div className={`mb-2 pl-3`}>
      <motion.div
        className="flex justify-between items-center cursor-pointer bg-slate-50/10 px-3 pb-1 rounded-lg"
        onClick={toggle}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-md font-semibold">{title}</h3>
        <motion.div className={`ml-6 transition-transform transform ${isOpen ? 'rotate-[-90deg]' : 'rotate-0'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 5.293a1 1 0 011.414 0L10 9.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mt-1 mb-8"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { ExpandableSection, Subsection };