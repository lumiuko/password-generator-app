type ContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <main className="w-full max-w-[540px] mx-auto flex flex-col gap-4 md:gap-8">{children}</main>
}
