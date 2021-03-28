#define Py_FatalError PyPy_FatalError
#define PyOS_snprintf PyPyOS_snprintf
#define PyOS_vsnprintf PyPyOS_vsnprintf
#define PyArg_Parse PyPyArg_Parse
#define PyArg_ParseTuple PyPyArg_ParseTuple
#define PyArg_UnpackTuple PyPyArg_UnpackTuple
#define PyArg_ParseTupleAndKeywords PyPyArg_ParseTupleAndKeywords
#define PyArg_VaParse PyPyArg_VaParse
#define PyArg_VaParseTupleAndKeywords PyPyArg_VaParseTupleAndKeywords
#define _PyArg_NoKeywords _PyPyArg_NoKeywords
#define PyUnicode_FromFormat PyPyUnicode_FromFormat
#define PyUnicode_FromFormatV PyPyUnicode_FromFormatV
#define PyUnicode_AsWideCharString PyPyUnicode_AsWideCharString
#define PyUnicode_GetSize PyPyUnicode_GetSize
#define PyUnicode_GetLength PyPyUnicode_GetLength
#define PyUnicode_FromWideChar PyPyUnicode_FromWideChar
#define PyModule_AddObject PyPyModule_AddObject
#define PyModule_AddIntConstant PyPyModule_AddIntConstant
#define PyModule_AddStringConstant PyPyModule_AddStringConstant
#define PyModule_GetDef PyPyModule_GetDef
#define PyModuleDef_Init PyPyModuleDef_Init
#define PyModule_GetState PyPyModule_GetState
#define Py_BuildValue PyPy_BuildValue
#define Py_VaBuildValue PyPy_VaBuildValue
#define PyTuple_Pack PyPyTuple_Pack
#define _PyArg_Parse_SizeT _PyPyArg_Parse_SizeT
#define _PyArg_ParseTuple_SizeT _PyPyArg_ParseTuple_SizeT
#define _PyArg_ParseTupleAndKeywords_SizeT _PyPyArg_ParseTupleAndKeywords_SizeT
#define _PyArg_VaParse_SizeT _PyPyArg_VaParse_SizeT
#define _PyArg_VaParseTupleAndKeywords_SizeT _PyPyArg_VaParseTupleAndKeywords_SizeT
#define _Py_BuildValue_SizeT _PyPy_BuildValue_SizeT
#define _Py_VaBuildValue_SizeT _PyPy_VaBuildValue_SizeT
#define PyErr_Format PyPyErr_Format
#define PyErr_NewException PyPyErr_NewException
#define PyErr_NewExceptionWithDoc PyPyErr_NewExceptionWithDoc
#define PyErr_WarnFormat PyPyErr_WarnFormat
#define _PyErr_FormatFromCause _PyPyErr_FormatFromCause
#define PySys_WriteStdout PyPySys_WriteStdout
#define PySys_WriteStderr PyPySys_WriteStderr
#define PyEval_CallFunction PyPyEval_CallFunction
#define PyEval_CallMethod PyPyEval_CallMethod
#define PyObject_CallFunction PyPyObject_CallFunction
#define PyObject_CallMethod PyPyObject_CallMethod
#define PyObject_CallFunctionObjArgs PyPyObject_CallFunctionObjArgs
#define PyObject_CallMethodObjArgs PyPyObject_CallMethodObjArgs
#define _PyObject_CallFunction_SizeT _PyPyObject_CallFunction_SizeT
#define _PyObject_CallMethod_SizeT _PyPyObject_CallMethod_SizeT
#define PyObject_DelItemString PyPyObject_DelItemString
#define PyObject_GetBuffer PyPyObject_GetBuffer
#define PyBuffer_Release PyPyBuffer_Release
#define _Py_setfilesystemdefaultencoding _PyPy_setfilesystemdefaultencoding
#define PyCapsule_New PyPyCapsule_New
#define PyCapsule_IsValid PyPyCapsule_IsValid
#define PyCapsule_GetPointer PyPyCapsule_GetPointer
#define PyCapsule_GetName PyPyCapsule_GetName
#define PyCapsule_GetDestructor PyPyCapsule_GetDestructor
#define PyCapsule_GetContext PyPyCapsule_GetContext
#define PyCapsule_SetPointer PyPyCapsule_SetPointer
#define PyCapsule_SetName PyPyCapsule_SetName
#define PyCapsule_SetDestructor PyPyCapsule_SetDestructor
#define PyCapsule_SetContext PyPyCapsule_SetContext
#define PyCapsule_Import PyPyCapsule_Import
#define PyCapsule_Type PyPyCapsule_Type
#define _Py_get_capsule_type _PyPy_get_capsule_type
#define PyComplex_AsCComplex PyPyComplex_AsCComplex
#define PyComplex_FromCComplex PyPyComplex_FromCComplex
#define PyObject_AsReadBuffer PyPyObject_AsReadBuffer
#define PyObject_AsWriteBuffer PyPyObject_AsWriteBuffer
#define PyObject_CheckReadBuffer PyPyObject_CheckReadBuffer
#define PyBuffer_GetPointer PyPyBuffer_GetPointer
#define PyBuffer_ToContiguous PyPyBuffer_ToContiguous
#define PyBuffer_FromContiguous PyPyBuffer_FromContiguous
#define PyImport_ImportModuleLevel PyPyImport_ImportModuleLevel
#define PyOS_getsig PyPyOS_getsig
#define PyOS_setsig PyPyOS_setsig
#define _Py_RestoreSignals _PyPy_RestoreSignals
#define PyThread_get_thread_ident PyPyThread_get_thread_ident
#define PyThread_allocate_lock PyPyThread_allocate_lock
#define PyThread_free_lock PyPyThread_free_lock
#define PyThread_acquire_lock PyPyThread_acquire_lock
#define PyThread_release_lock PyPyThread_release_lock
#define PyThread_create_key PyPyThread_create_key
#define PyThread_delete_key PyPyThread_delete_key
#define PyThread_set_key_value PyPyThread_set_key_value
#define PyThread_get_key_value PyPyThread_get_key_value
#define PyThread_delete_key_value PyPyThread_delete_key_value
#define PyThread_ReInitTLS PyPyThread_ReInitTLS
#define PyThread_init_thread PyPyThread_init_thread
#define PyThread_start_new_thread PyPyThread_start_new_thread
#define PyStructSequence_InitType PyPyStructSequence_InitType
#define PyStructSequence_InitType2 PyPyStructSequence_InitType2
#define PyStructSequence_New PyPyStructSequence_New
#define PyStructSequence_UnnamedField PyPyStructSequence_UnnamedField
#define PyStructSequence_NewType PyPyStructSequence_NewType
#define PyFunction_Type PyPyFunction_Type
#define PyMethod_Type PyPyMethod_Type
#define PyRange_Type PyPyRange_Type
#define PyTraceBack_Type PyPyTraceBack_Type
#define Py_DebugFlag PyPy_DebugFlag
#define Py_VerboseFlag PyPy_VerboseFlag
#define Py_QuietFlag PyPy_QuietFlag
#define Py_InteractiveFlag PyPy_InteractiveFlag
#define Py_InspectFlag PyPy_InspectFlag
#define Py_OptimizeFlag PyPy_OptimizeFlag
#define Py_NoSiteFlag PyPy_NoSiteFlag
#define Py_BytesWarningFlag PyPy_BytesWarningFlag
#define Py_UseClassExceptionsFlag PyPy_UseClassExceptionsFlag
#define Py_FrozenFlag PyPy_FrozenFlag
#define Py_IgnoreEnvironmentFlag PyPy_IgnoreEnvironmentFlag
#define Py_DontWriteBytecodeFlag PyPy_DontWriteBytecodeFlag
#define Py_NoUserSiteDirectory PyPy_NoUserSiteDirectory
#define Py_UnbufferedStdioFlag PyPy_UnbufferedStdioFlag
#define Py_HashRandomizationFlag PyPy_HashRandomizationFlag
#define Py_IsolatedFlag PyPy_IsolatedFlag
#define _Py_PackageContext _PyPy_PackageContext
#define PyOS_InputHook PyPyOS_InputHook
#define PyMem_RawMalloc PyPyMem_RawMalloc
#define PyMem_RawCalloc PyPyMem_RawCalloc
#define PyMem_RawRealloc PyPyMem_RawRealloc
#define PyMem_RawFree PyPyMem_RawFree
#define PyMem_Malloc PyPyMem_Malloc
#define PyMem_Calloc PyPyMem_Calloc
#define PyMem_Realloc PyPyMem_Realloc
#define PyMem_Free PyPyMem_Free
#define PyObject_CallFinalizerFromDealloc PyPyObject_CallFinalizerFromDealloc
#define PyTraceMalloc_Track PyPyTraceMalloc_Track
#define PyTraceMalloc_Untrack PyPyTraceMalloc_Untrack
#define PyBytes_FromFormat PyPyBytes_FromFormat
#define PyBytes_FromFormatV PyPyBytes_FromFormatV
#define PyType_FromSpec PyPyType_FromSpec
#define Py_IncRef PyPy_IncRef
#define Py_DecRef PyPy_DecRef
#define PyObject_Free PyPyObject_Free
#define PyObject_GC_Del PyPyObject_GC_Del
#define PyType_GenericAlloc PyPyType_GenericAlloc
#define _PyObject_New _PyPyObject_New
#define _PyObject_NewVar _PyPyObject_NewVar
#define _PyObject_GC_Malloc _PyPyObject_GC_Malloc
#define _PyObject_GC_New _PyPyObject_GC_New
#define _PyObject_GC_NewVar _PyPyObject_GC_NewVar
#define PyObject_Init PyPyObject_Init
#define PyObject_InitVar PyPyObject_InitVar
#define PyTuple_New PyPyTuple_New
#define _Py_Dealloc _PyPy_Dealloc
#define Py_LegacyWindowsStdioFlag PyPy_LegacyWindowsStdioFlag
#define SIZEOF_LONG_LONG 8
#define SIZEOF_VOID_P 4
#define SIZEOF_SIZE_T 4
#define SIZEOF_TIME_T 8
#define SIZEOF_LONG 4
#define SIZEOF_SHORT 2
#define SIZEOF_INT 4
#define SIZEOF_FLOAT 4
#define SIZEOF_DOUBLE 8
