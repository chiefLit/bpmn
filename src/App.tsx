import { useEffect, useRef, useState } from 'react';
import BpmnModeler from 'bpmn-js/lib/Modeler';

import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';

function Home() {
  const [bpmnModeler, setBpmnModeler] = useState<BpmnModeler>()
  const canvasRef = useRef<HTMLDivElement>(null)
  console.log(123121)

  useEffect(() => {
    const bpmnModeler = new BpmnModeler({
      container: canvasRef.current!,
      propertiesPanel: {
        parent: '#properties-panel',
      },
    });
    setBpmnModeler(bpmnModeler)
    bpmnModeler.createDiagram()
  }, [])
  return (
    <div>
      <div id="canvas" ref={canvasRef} style={{ height: '70vh' }}></div>
      <div id="properties-panel"></div>
    </div>
  )
}

export default Home;
