function makeMapStateToProps() {
    let memoizedProps = {} as any;
    return () => {
        return memoizedProps;
    }
}

export {
    makeMapStateToProps
}