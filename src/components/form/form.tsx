export default function Form({submit, children}){

    return(
        <>
        
      <form onSubmit={submit}>
        {children}
      </form>
        
        </>
    );
}