type Props = React.ComponentProps<"button"> & {
  isloading?: boolean;
};

export function Button({ 
    children, 
    isloading,
    type = "button", 
    ...rest 
}: Props) {
        return(
            <button type={type} disabled={isloading}  className="flex items-center justify-center bg-green-100 rounded-lg text-white cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50 disabled:cursor-progress h-12" {...rest}>
                {children}
            </button>
        )
    }
