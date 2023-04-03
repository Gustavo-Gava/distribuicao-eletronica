type ContentWrapper = {
	children: React.ReactNode;
};

export function ContentWrapper({ children }: ContentWrapper) {
	return (
		<div className="flex w-full flex-col gap-2 rounded-lg bg-blue-400 bg-opacity-50 p-4 shadow-lg">
			{children}
		</div>
	);
}
