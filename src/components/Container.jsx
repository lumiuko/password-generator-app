import PropTypes from 'prop-types'

export default function Container({ children }) {
  return <main className="w-full max-w-[540px] mx-auto flex flex-col gap-4 md:gap-8">{children}</main>
}

Container.propTypes = {
  children: PropTypes.node
}
