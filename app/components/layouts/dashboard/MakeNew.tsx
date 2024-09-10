import React from 'react';
import styles from '@/app/components/layouts/dashboard/styles/MakeNew.module.css';

interface MakeNewProps {
    isVisible: boolean;
}

const MakeNew: React.FC<MakeNewProps> = ({ isVisible }) => {
    return (
      <div 
        className={styles.addedContainer}
        style={{
            zIndex: isVisible ? 10 : -1,  // z-index を切り替えて表示/非表示を制御
            opacity: isVisible ? 1 : 0,   // opacity で表示/非表示を制御
        }}
      >

      </div>
    )
  }
  
  export default MakeNew

  
// import React from 'react';
// import styles from '@/app/components/layouts/dashboard/styles/MakeNew.module.css';

// interface MakeNewProps {
//     isVisible: boolean;
// }

// const MakeNew: React.FC<MakeNewProps> = ({ isVisible }) => {
//     return (
//       <div 
//         className={styles.addedContainer}
//         style={{
//             zIndex: isVisible ? 10 : -1,  // z-index を切り替えて表示/非表示を制御
//             opacity: isVisible ? 1 : 0,   // opacity で表示/非表示を制御
//         }}
//       >

//       </div>
//     )
//   }
  
//   export default MakeNew