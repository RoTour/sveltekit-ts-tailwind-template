type TailwindBreakpoint = [640, 'sm'] | [768, 'md'] | [1024, 'lg'] | [1280, 'xl'] | [1536, '2xl'];

const breakPoints: TailwindBreakpoint[] = [[640, 'sm'], [768, 'md'], [1024, 'lg'], [1280, 'xl'], [1536, '2xl']]

export const getCurrentBreakPoint = (): TailwindBreakpoint => {
	const currentDeviceWidth = window.innerWidth;
	for (const breakPoint of breakPoints) {
		if (currentDeviceWidth < breakPoint[0]) return breakPoint
	}
	return breakPoints[breakPoints.length - 1]
}