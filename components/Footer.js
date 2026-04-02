export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-sm text-gray-400">
        <p className="text-center">
          © {new Date().getFullYear()} Thotshang Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
