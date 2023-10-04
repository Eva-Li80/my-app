const HEAD = (
    <div
     className="head"
    />
  )
  
  const BODY = (
    <div
 className="bodyn"
    />
  )
  
  const RIGHT_ARM = (
    <div
      className="rightarm"
    />
  )
  
  const LEFT_ARM = (
    <div
     className="leftarm"
    />
  )
  
  const RIGHT_LEG = (
    <div
     className="rightLeg"
    />
  )
  
  const LEFT_LEG = (
    <div
     className="leftLeg"
    />
  )
  
  const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]
  
  type HangmanDrawingProps = {
    numberOfGuesses: number
  }
  
  export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return (
      <div style={{ position: "relative" }}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div
         className="litenlinje"
        />
        <div
          className="linjetop"
        />
        <div
         className="lin"
        />
        <div className="linjer"/>
      </div>
    )
  }