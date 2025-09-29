import './Metodologia.css';


const Metodologia = () => {
  return (
    <div className="metodologia">
    
      <h2>Methodology</h2>
      <p>
        ADSProcSuite was designed with a focus on three main functions:
      </p>

      <ul>
        <li>
          <b>Orthophoto generation: </b>Application of geometric correction processes based on digital terrain 
          models and exterior orientation parameters (MIKHAIL; BETHEL; MCGLONE, 2001).
        </li>
        <li>
          <b>Positional accuracy verification: </b>Use of ground control points (GCPs) to assess the root mean square error (RMSE), 
          in accordance with ASPRS standards (2015).
        </li>
        <li>
          <b>Radiometric equalization  </b>Implementation of techniques for tonal homogenization between image blocks, ensuring visual coherence in the mosaic 
          (WOLF; DEWITT; WILKINSON, 2014).
        </li>
        <li>
          <b>Integration with external data and third-party applications  </b>Additional tools enable integration with external data such as the 
          SRTM and ASTER global elevation models, as well as integration with third-party applications like QT Reader 64-bit for data visualization.
        </li>
      </ul>
      
    </div>
  );
};

export default Metodologia;